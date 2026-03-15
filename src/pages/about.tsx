import styles from '../styles/about.module.css';

export default function About() {
	return (
		<div id={`${styles.aboutContainer}`}>
			<img 
				src="/extras/Shiroko_Swimsuit_Sprite.webp" 
				alt="Shiroko" 
				className={styles.aboutSprite} 
			/>
			<div className={styles.textContent}>
				<h1>About this Project</h1>
				<p>
					<span>Blue Archive Database</span> is a web application designed to help fans explore
					a comprehensive collection of data from the popular mobile game,{' '}
					<a
						href="https://bluearchive.nexon.com/home"
						className={styles.anchor}
						target="_blank"
						rel="noopener noreferrer"
					>
						Blue Archive
					</a>
					.
				</p>

				<p>
					Developed using React and modern CSS styling, the core focus of this
					project is to provide a seamless and visually appealing experience 
					for searching and viewing detailed character information.
				</p>

				<p>
					Please note that all character assets, models, and illustrations showcased 
					here are the property of their respective creators. The data and media 
					featured were sourced from the community-driven{' '}
					<a
						href="https://bluearchive.wiki/wiki/Characters"
						target="_blank"
						className={styles.anchor}
						rel="noopener noreferrer"
					>
						wiki
					</a>{' '}
					and are utilized strictly for educational and portfolio purposes.
				</p>
			</div>
		</div>
	);
}
