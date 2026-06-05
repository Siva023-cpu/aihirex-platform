"""create jobs table

Revision ID: a3db5d6592e4
Revises: 
Create Date: 2026-06-05 11:54:31.878597

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'a3db5d6592e4'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade() -> None:
    op.create_table(
        'jobs',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=255), nullable=False),
        sa.Column('company', sa.String(length=255), nullable=False),
        sa.Column('location', sa.String(length=255), nullable=True),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('skills', sa.Text(), nullable=True),
        sa.Column('salary', sa.String(length=100), nullable=True),
        sa.Column(
            'created_at',
            sa.DateTime(),
            server_default=sa.text('now()'),
            nullable=True
        ),
        sa.PrimaryKeyConstraint('id')
    )

    op.create_index(
        op.f('ix_jobs_id'),
        'jobs',
        ['id'],
        unique=False
    )    # ### end Alembic commands ###


def downgrade() -> None:
    op.drop_index(
        op.f('ix_jobs_id'),
        table_name='jobs'
    )

    op.drop_table('jobs')