const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// Simulate fetching data from an API asynchronously
async function fetchEnrollmentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(enrollmentData.enrollmentData);
    }, 1000); 
  });
}

async function calculateEnrollment() {
  const enrollmentData = await fetchEnrollmentData();

  const courseEnrollment = {};

  enrollmentData.forEach((entry) => {
    const { student, course } = entry;

    if (courseEnrollment[course]) {
      courseEnrollment[course]++;
    } else {
      courseEnrollment[course] = 1;
    }
  });

  for (const course in courseEnrollment) {
    console.log(`Course: ${course}, Total Enrollment: ${courseEnrollment[course]}`);
  }
}

calculateEnrollment();
