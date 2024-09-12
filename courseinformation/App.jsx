const Header = (props) => {
  return(
  <div>
     <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  const {part} = props
  return(
    <div>
    <Part  parts={part[0]}/>
    <Part parts={part[1]}/>
    <Part parts={part[2]}/>
  </div>
   
 
  )
}

const Total = (props) =>{
  const  {p} = props
  return(
    <div>
      <p>Number of exercises {p[0].exercises + p[1].exercises + p[2].exercises}</p>

    </div>
  )
}

const Part = (c) => {
  const {parts} = c
return(
  
  <div>
    <p>{parts.name} {parts.exercises}</p>

  </div>
)

}

const App = () => {
  {/*const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */}

  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
{
    name: 'State of a component',
    exercises: 14
  }]

  return (
    <div>

<Header course={course}/>
<Content part={parts}/>
<Total p={parts}/>
    </div>
  )

}
export default App



