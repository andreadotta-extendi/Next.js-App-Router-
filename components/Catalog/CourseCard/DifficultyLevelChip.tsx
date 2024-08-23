import { CourseType, DifficultyLevel } from '@/components/types/Catalog';
import { Avatar, Chip, Typography } from '@mui/material'
import React from 'react'
import { CourseCardProps } from '.';
import { getCardColors } from '../utils';

const DifficultyLevelChip = ({courseType, level, highlighted}: Pick<CourseCardProps, 'courseType' | "level" |'highlighted'>) => {
  const colors = getCardColors(courseType, highlighted)
    return (
    <Chip 
    size='small'
    label={<Typography variant="caption-500">{level}</Typography>}
    avatar={<Avatar src="/assets/play-arrow-filled.png" />}
    sx={{background:colors?.chipBg, color: colors?.chipTextColor }}
  />
  )
}

export default DifficultyLevelChip