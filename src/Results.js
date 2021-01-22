const Results = (props) => {
	return (
		<section>
			<h1> You currently pay ${props.oldTaxValue} in taxes </h1>
			<h1> Under this new system, you will pay ${props.newTaxValue} in taxes </h1>
			<h1> You will pay an extra ${props.newTaxValue - props.oldTaxValue} in taxes </h1>
			<h1> Enter graph here </h1>
			<h1> Understanding the system </h1>
		</section>

);

}

export default Results;