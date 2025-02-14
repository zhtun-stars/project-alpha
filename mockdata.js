const randomNames = [
  'Dr. Jane Doe',
  'Dr. John Smith',
  'Dr. Emily Davis',
  'Dr. Michael Brown',
  'Dr. Sarah Wilson',
  'Dr. David Johnson',
  'Dr. Laura Martinez',
  'Dr. Robert Garcia',
]

const randomDates = [
  '1969-07-16',
  '1970-08-17',
  '1971-09-18',
  '1972-10-19',
  '1973-11-20',
  '1974-12-21',
  '1975-01-22',
  '1976-02-23',
]

const randomBaseNames = ['Calgary', 'Edmonton']

export const CLINICAL_DATA = Array.from({ length: 20 }, (_, index) => ({
  mission: `24A00248${index + 1}`,
  date: randomDates[Math.floor(Math.random() * randomDates.length)],
  physicianDate: randomDates[Math.floor(Math.random() * randomDates.length)],
  peerReview: randomDates[Math.floor(Math.random() * randomDates.length)],
  physician: randomNames[Math.floor(Math.random() * randomNames.length)],
  baseName: randomBaseNames[Math.floor(Math.random() * randomBaseNames.length)],
  physicianReview: parseInt(Math.random() * 10, 10) % 2 === 0,
}))
