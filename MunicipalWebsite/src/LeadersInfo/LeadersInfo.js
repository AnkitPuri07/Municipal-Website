const leaders = [
  // Municipality Level
  { id: 1, name: "Rajesh Shrestha", position: "Mayor", type: "Public Official", region: "municipality", image: "/images/mayor.jpg" },
  { id: 2, name: "Anita Gurung", position: "Deputy Mayor", type: "Public Official", region: "municipality", image: "/images/deputy_mayor.jpg" },
  { id: 3, name: "Maya Lama", position: "Chief Administrative Officer", type: "Civil Servant", region: "municipality", image: "/images/admin_officer.jpg" },
  { id: 4, name: "Suman Basnet", position: "Planning Officer", type: "Civil Servant", region: "municipality", image: "/images/planning_officer.jpg" },
  { id: 5, name: "Rita Sharma", position: "Legal Officer", type: "Civil Servant", region: "municipality", image: "/images/legal_officer.jpg" },
  { id: 6, name: "Kamal Rai", position: "Finance Officer", type: "Civil Servant", region: "municipality", image: "/images/finance_officer.jpg" },
  { id: 7, name: "Nabin KC", position: "Tourism Officer", type: "Civil Servant", region: "municipality", image: "/images/tourism_officer.jpg" },
  { id: 8, name: "Pooja Rimal", position: "Public Relations Officer", type: "Civil Servant", region: "municipality", image: "/images/public_relations.jpg" },

  // Ward 1
  { id: 9, name: "Keshav Thapa", position: "Ward Chairperson", type: "Public Official", region: "ward1", image: "/images/ward_chair.jpg" },
  { id: 10, name: "Maya Lama", position: "Chief Administrative Officer", type: "Civil Servant", region: "ward1", image: "/images/admin_officer.jpg" },
  { id: 11, name: "Suman Basnet", position: "Planning Officer", type: "Civil Servant", region: "ward1", image: "/images/planning_officer.jpg" },
  { id: 12, name: "Rita Sharma", position: "Legal Officer", type: "Civil Servant", region: "ward1", image: "/images/legal_officer.jpg" },
  { id: 13, name: "Nabin KC", position: "Tourism Officer", type: "Civil Servant", region: "ward1", image: "/images/tourism_officer.jpg" },
  { id: 14, name: "Kamal Rai", position: "Finance Officer", type: "Civil Servant", region: "ward1", image: "/images/finance_officer.jpg" },

  // Ward 2
  { id: 15, name: "Bishal Ghimire", position: "Ward Chairperson", type: "Public Official", region: "ward2", image: "/images/ward_chair.jpg" },
  { id: 16, name: "Bikram KC", position: "Engineer", type: "Civil Servant", region: "ward2", image: "/images/engineer.jpg" },
  { id: 17, name: "Sita Koirala", position: "Account Officer", type: "Civil Servant", region: "ward2", image: "/images/account_officer.jpg" },
  { id: 18, name: "Dipesh Rai", position: "Health Officer", type: "Civil Servant", region: "ward2", image: "/images/health_officer.jpg" },
  { id: 19, name: "Nabin Tamang", position: "IT Officer", type: "Civil Servant", region: "ward2", image: "/images/it_officer.jpg" },
  { id: 20, name: "Mina Adhikari", position: "Sanitation Officer", type: "Civil Servant", region: "ward2", image: "/images/sanitation_officer.jpg" },
  { id: 21, name: "Krishna Poudel", position: "Water Supply Officer", type: "Civil Servant", region: "ward2", image: "/images/water_officer.jpg" },

  // Ward 3
  { id: 22, name: "Rashmi Bista", position: "Ward Chairperson", type: "Public Official", region: "ward3", image: "/images/ward_chair.jpg" },
  { id: 23, name: "Rashmi Sharma", position: "Education Officer", type: "Civil Servant", region: "ward3", image: "/images/education_officer.jpg" },
  { id: 24, name: "Prakash Oli", position: "Environment Officer", type: "Civil Servant", region: "ward3", image: "/images/environment_officer.jpg" },
  { id: 25, name: "Kabita Basnet", position: "Women & Child Officer", type: "Civil Servant", region: "ward3", image: "/images/women_child_officer.jpg" },
  { id: 26, name: "Sunil Guragain", position: "Cultural Officer", type: "Civil Servant", region: "ward3", image: "/images/cultural_officer.jpg" },
  { id: 27, name: "Hari Puri", position: "Sports Officer", type: "Civil Servant", region: "ward3", image: "/images/sports_officer.jpg" },
  { id: 28, name: "Sushila Bista", position: "Disaster Management Officer", type: "Civil Servant", region: "ward3", image: "/images/disaster_officer.jpg" },

  // Ward 4
  { id: 29, name: "Deepak Koirala", position: "Ward Chairperson", type: "Public Official", region: "ward4", image: "/images/ward_chair.jpg" },
  { id: 30, name: "Manoj Dahal", position: "Planning Officer", type: "Civil Servant", region: "ward4", image: "/images/planning_officer.jpg" },
  { id: 31, name: "Sarita Shrestha", position: "Legal Officer", type: "Civil Servant", region: "ward4", image: "/images/legal_officer.jpg" },
  { id: 32, name: "Nirajan Bhattarai", position: "Transport Officer", type: "Civil Servant", region: "ward4", image: "/images/transport_officer.jpg" },
  { id: 33, name: "Nisha Adhikari", position: "Social Welfare Officer", type: "Civil Servant", region: "ward4", image: "/images/social_welfare_officer.jpg" },
  { id: 34, name: "Deepak Thapa", position: "Account Officer", type: "Civil Servant", region: "ward4", image: "/images/account_officer.jpg" },
  { id: 35, name: "Sabina Gurung", position: "Health Officer", type: "Civil Servant", region: "ward4", image: "/images/health_officer.jpg" },

  // Ward 5
  { id: 36, name: "Ramesh Koirala", position: "Ward Chairperson", type: "Public Official", region: "ward5", image: "/images/ward_chair.jpg" },
  { id: 37, name: "Hari Sigdel", position: "Sanitation Officer", type: "Civil Servant", region: "ward5", image: "/images/sanitation_officer.jpg" },
  { id: 38, name: "Meena Khadka", position: "Community Development Officer", type: "Civil Servant", region: "ward5", image: "/images/community_dev_officer.jpg" },
  { id: 39, name: "Ramesh Puri", position: "Water Supply Officer", type: "Civil Servant", region: "ward5", image: "/images/water_officer.jpg" },
  { id: 40, name: "Anju Tiwari", position: "Agriculture Officer", type: "Civil Servant", region: "ward5", image: "/images/agriculture_officer.jpg" },
  { id: 41, name: "Pramod Koirala", position: "IT Officer", type: "Civil Servant", region: "ward5", image: "/images/it_officer.jpg" },
  { id: 42, name: "Rekha Gautam", position: "Health Officer", type: "Civil Servant", region: "ward5", image: "/images/health_officer.jpg" },
];

export default leaders;
