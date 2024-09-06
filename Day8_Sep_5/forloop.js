const students = [
    {
      studentName: "Tamizharasi",
      studentEmail: "t@gmail.com",
      gender: "F",
      passed: false,
      rollNo: 20241,
    },
    {
      studentName: "Kavitha",
      studentEmail: "k@gmail.com",
      gender: "F",
      passed: true,
      rollNo: 20242,
    },
    {
      studentName: "Senthil",
      studentEmail: "s@gmail.com",
      gender: "M",
      passed: true,
      rollNo: 20243,
    },
    {
      studentName: "Bhuvanesh",
      studentEmail: "b@gmail.com",
      gender: "M",
      passed: false,
      rollNo: 20244,
    },
    {
      studentName: "Dhanusha",
      studentEmail: "d@gmail.com",
      gender: "F",
      passed: false,
      rollNo: 20245,
    },
    {
      studentName: "Valli",
      studentEmail: "v@gmail.com",
      gender: "F",
      passed: false,
      rollNo: 20246,
    },
    {
      studentName: "Navasri",
      studentEmail: "n@gmail.com",
      gender: "F",
      passed: false,
      rollNo: 20247,
    },
    {
      studentName: "Harini",
      studentEmail: "h@gmail.com",
      gender: "F",
      passed: false,
      rollNo: 20248,
    },
  ];






  const studentsCount = students.length;

  for(let index=0; index < studentsCount; index = index+1){
    console.log( students[index] )
  }