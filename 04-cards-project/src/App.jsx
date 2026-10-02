  import Card from './components/Card'


    const App = () => {

        const jobsOpenings = [
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.RRCAP8QgLBxi2CYWy1tAfQHaEK?r=0&pid=Api&h=220&P=0",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.6BOvnuJ5HvweVJzuIi-H7AHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.2iNYMrWEy8ajdp6tl0sQkQHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.9g4dkKVAUyciOuDI9_vEYQHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.rePCYv0Kgsqp5hdsUrrKxAHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.0Eb1VUFSOSpcwYlahbfHLAHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$46/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.nfYEcIfdBkpRJDa3DxuLkwHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$54/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Xc79egD4HYqtOXjTgq_4fwHaHa?r=0&pid=Api&h=220&P=0",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?r=0&pid=Api&h=220&P=0",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$44/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.jdQ0-zCqys8HUsVr1-EE6AHaEK?r=0&pid=Api&h=220&P=0",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Bangalore, India"
  }
];

      return (
        <div className="Parent">
            {jobsOpenings.map(function(elem){
              
              return <Card  brandLogo = {elem.brandLogo} companyName = {elem.companyName} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} location = {elem.location} pay = {elem.pay}/>
            })}
            
        </div>
      )
    }

    export default App