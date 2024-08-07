/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import TeacherCard from './TeacherCard';

interface Teacher {
  imageSrc: string;
  name: string;
  instruments: string[];
}

interface TeacherGridProps {
  teachers: Teacher[];
}

const TeacherGrid: React.FC<TeacherGridProps> = ({ teachers }) => {
  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      {teachers.map((teacher, index) => (
        <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center max-md:mt-6">
            <TeacherCard
              imageSrc={teacher.imageSrc}
              name={teacher.name}
              instruments={teacher.instruments}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeacherGrid;