import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full">
						<div className="portfolio-wrapper">
							<div className="portfolio-item">
								<img src="/leafhea.png" className="portfolio-image" />

								<h4 className="portfolio-name"><Link href="//www.leafhea-indonesia.com/"><a>Leafhea Indonesia</a></Link></h4>
								<div className="portfolio-category">Website Sabun Kecantikan</div>
							</div>
							<div className="portfolio-item">
								<img src="/kabarcipatat.png" className="portfolio-image" />

								<h4 className="portfolio-name"><Link href="//www.kabarcipatat.my.id/"><a>Kabar Cipatat</a></Link></h4>
								<div className="portfolio-category">Website Portal Berita</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;