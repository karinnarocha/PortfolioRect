import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>

                <div className={styles.imageWrap}>
                    <img src="/karinna.png" alt="Karinna Rocha" />
                </div>

                <div className={styles.content}>
                    <span className={styles.number}>04</span>
                    <h2>About</h2>

                    <p className={styles.intro}>
                        Hi! My name is Karinna, where design meets creativity and technology.
                    </p>

                    <p>
                        I’m a Full Stack developer, designer, and problem solver driven by
                        creativity and curiosity. I love creating things that connect
                        people, ideas, and technology.
                    </p>

                    <p>
                        Moving to the United States and becoming the first in my family to
                        earn an American degree pushed me to grow in ways I never expected.
                        It taught me resilience, adaptability, and the importance of
                        believing in your own path.
                    </p>

                    <p>
                        Today I work across design, full-stack development, and digital
                        strategy, combining creativity with technical thinking to build
                        meaningful projects and experiences.
                    </p>

                    <p>
                        Outside of technology, I’m also a Brazilian Jiu-Jitsu professor,
                        and that discipline deeply shaped how I approach life and work.
                    </p>

                    <blockquote>
                        “Discipline, creativity, and resilience.”
                    </blockquote>
                </div>
            </div>
        </section>
    );
}