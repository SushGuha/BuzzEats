import React from 'react';

function AboutUs() {
	return (
		<div>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vh'}}>
							About Us
						</h1>
						<p class="text-small" style = {{display: 'flex', marginLeft: '60px', marginRight: '60px', height: '3vh', alignItems: 'center'}}>
							BuzzEats is a review system built specifically for Georgia Tech dining services. 
							Through BuzzEats, students can view dining hours for Georgia Tech dining as well as 
							ratings and reviews. BuzzEats makes it easier for Georgia Tech students to view 
							dining options and see dining reviews and hours. We aim to make Georgia Tech dining
							more efficient.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '12vh'}}>
							The Team
						</h1>
						<p class="text-small" style = {{display: 'flex', marginLeft: '60px', marginRight: '60px', height: '3vh', alignItems: 'center'}}>
							Team Lead: Sushant Guha
						</p>
						<p class="text-small" style = {{display: 'flex', marginLeft: '60px', marginRight: '60px', height: '1vh', alignItems: 'center'}}>
							Team Members: Zini Chakraborty, Daiwik Pal, Asmita Karandikar, 
							Joao Pedro Amaral Bonchristiano, Rishi Manchanpalli, Mehdi Bencheqroun
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUs;