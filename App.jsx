const Header = (props) => {
  return(
  <div>
     <h1>{props.course}</h1>
  </div>
  )
}

const Content = (a) => {
  return(
    <div>
      <p>
        {a.p1} {a.e1}
        </p>
      <p>
        {a.p2} {a.e2}
      </p>
      <p>
        {a.p3} {a.e3}
      </p>
    </div>
  )
}

const Total = (b) =>{
  return(
    <div>
      <p>Number of exercises {b.e1 + b.e2 + b.e3}</p>

    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>

<Header course={course}/>
<Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3} />
<Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

export default App

