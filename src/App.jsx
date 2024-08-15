function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
    <hgroup>
      <img src="images/group.svg" alt="" />
      <h1>Meet the <i style={{color:"purple"}}>{name}</i></h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button className="outline" onClick={()=> alert('Hi there')}>Click me</button>
    </hgroup>
      </article>
    </div>
  )
}
export default App
