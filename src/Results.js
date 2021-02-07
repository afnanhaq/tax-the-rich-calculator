import './Results.css';

const Results = (props) => {
	const giveTax = (tax) => {
		return tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	return (
		<section className="center">
			<h1 id="result-title"> <u> Results </u></h1>
			<h2 className="result"> You currently pay ${giveTax(props.oldTaxValue)} in taxes </h2>
			<h2 className="result"> Under this new system, you will pay ${giveTax(props.newTaxValue)} in taxes </h2>
			<h2 className="result"> You will pay an extra ${giveTax(props.newTaxValue - props.oldTaxValue)} in taxes </h2>
			{/*<h2 className="result"> Enter graph here </h2>*/}
			<h2 className="result" id="understand" onClick={props.showUnderstanding}> <a href="#explanation-title" className="link">
			 ☟ Click to understand the system ☟ </a></h2>
		</section>

);

}

export default Results;