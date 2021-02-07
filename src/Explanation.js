import './Explanation.css';
import Problem from './problem.JPG';

const Explanation = () => {
	return (
		<div>
		<section className="width">
			<h3 className="title top-title" id="explanation-title"> Problem: </h3>
			<h4 className="explanation"> Currently, someone who makes $25,000 pays <b>almost*</b> the same tax as someone who makes $900,000.</h4>
			<h5> <em> * 5.06% vs. 6.85% </em> </h5>

			<h3 className="title"> Solution: </h3>
			<h4 className="explanation"> An actually progressive tax system. </h4>

			<h3 className="title"> How? </h3>
			<h4 className="explanation"> New brackets for individuals who make more than $300,000/year. Tax increase would meaingfully impact only those making over $1,000,000 per year </h4>
			{/*<h2> Graph here </h2>*/}

			<h1 className="title" id="try_other_incomes"> <a href="#top" className="link">☝ Try other incomes out ☝</a></h1>
			<h4 className="explanation" id="try_other_incomes"> <a href="https://taxtherichnys.com/" target="_blank" className="link">
			Or visit the Tax The Rich website </a></h4>
			
		</section>
		<footer className="footer">
				<hr />
				<small> 2021 Tax The Rich. Designed by Afnan Haq. </small>
		</footer>
		</div>

);

}

export default Explanation;