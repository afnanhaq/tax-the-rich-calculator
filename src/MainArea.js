import './MainArea.css';

const MainArea = (props) => {
  return (
    <section className="main-area">
      <header className="navbar" id="top">
        <h1 className="page-title titles"> Tax the Rich Calculator </h1>
        <h1 className="page-subtitle titles"> It's Time to Invest in Our New York </h1>
      </header>
      <main className="text-area">
        <h4 className="main-text"> Thousands of New Yorkers are demanding a proper progressive tax system in order to prevent cuts to our necessary social services and
        handle our deep budget deficit. But the question remains... </h4>
        <h2 className="main-text" id="question"> How will the new NYS progressive income tax affect me? </h2>
        <form onSubmit={props.handleSubmit} className="form-section">
          <label className="main-text">
            Enter your pre-tax income:&ensp;   
            <input type="text" value={props.incomeValue} onChange={props.handleChange} className="search-bar" />
          </label>
          <br />
          <p className="inline"> Or try out these values:&ensp; </p>
          <button className="tips" onClick={() => props.setValue(1000000)}> $1,000,000/year </button>
          <button className="tips" onClick={() => props.setValue(40000)}> $40,000/year </button>
          <button className="tips" onClick={() => props.setValue(600000)}> $600,000/year </button>
          <button className="tips" onClick={() => props.setValue(50000000)}> $50,000,000/year </button>
          <br />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </main>
    </section>
  );
}

export default MainArea;