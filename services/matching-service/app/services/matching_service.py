class MatchingService:

    @staticmethod
    def calculate_match(resume_skills, job_skills):

        resume_set = set(
            skill.strip().lower()
            for skill in resume_skills
        )

        job_set = set(
            skill.strip().lower()
            for skill in job_skills
        )

        matched = list(resume_set & job_set)
        missing = list(job_set - resume_set)

        score = 0
        if len(job_set) > 0:
            score = int(
                (len(matched) / len(job_set)) * 100
            )

        return {
            "match_score": score,
            "matched_skills": matched,
            "missing_skills": missing
        }