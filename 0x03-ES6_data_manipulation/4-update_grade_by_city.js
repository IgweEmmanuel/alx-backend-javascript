function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }
  return list.filter((items) => items.location === city).map((items) => {
    const newGrade = newGrades.find((grade) => grade.studentId === items.id);
    return {
      ...items, grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
export default updateStudentGradeByCity;
