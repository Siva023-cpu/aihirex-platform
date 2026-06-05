class SkillExtractor:

    SKILLS = [
        "python",
        "java",
        "fastapi",
        "flask",
        "docker",
        "kubernetes",
        "aws",
        "postgresql",
        "sql",
        "git",
        "linux",
        "html",
        "css",
        "javascript"
    ]

    @staticmethod
    def extract(text: str):
        text = text.lower()

        found = []

        for skill in SkillExtractor.SKILLS:
            if skill in text:
                found.append(skill)

        return {
            "skills": found
        }