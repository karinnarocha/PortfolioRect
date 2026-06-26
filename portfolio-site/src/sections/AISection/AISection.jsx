import { Section } from "../../components/Layout";
import GlowBox from "../../components/GlowBox";
import Chip from "../../components/Chip";
import styles from "./AISection.module.css";

const AI_STACK = ["Python", "RealtimeSTT", "Google Translate", "Speech-to-Text"];

export default function AISection() {
  return (
    <Section id="ai" num="01" title="AI, in production">
      <GlowBox className={styles.panel} innerClassName={styles.inner}>
        <div>
          <h3 className={styles.heading}>
            I built a real-time translator for my Twitch chat.
          </h3>
          <p className={styles.copy}>
            My stream has a mix of English and Portuguese-speaking viewers, so I
            built a live speech-to-text tool that transcribes what I say,
            auto-detects the language, and instantly translates EN ↔ PT to an
            on-screen overlay — so everyone follows along in real time, no matter
            which language they speak.
          </p>
          <div className={styles.chips}>
            {AI_STACK.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={styles.termDot} />
            <span className={styles.termDot} />
            <span className={styles.termDot} />
          </div>
          <pre className={styles.termBody}>
            <span className={styles.muted}># live_translator.py</span>{"\n"}
            <span className={styles.kw}>from</span> RealtimeSTT <span className={styles.kw}>import</span> AudioToTextRecorder{"\n"}
            <span className={styles.kw}>from</span> deep_translator <span className={styles.kw}>import</span> GoogleTranslator{"\n"}
            {"\n"}
            {"\n"}
            <span className={styles.kw}>def</span> process_text(text):{"\n"}
            {"    "}print(text){"\n"}
            {"    "}print(<span className={styles.str}>"Detected Language:"</span>, recorder.detected_language){"\n"}
            {"\n"}
            {"    "}<span className={styles.kw}>if</span> recorder.detected_language == <span className={styles.str}>"en"</span>:{"\n"}
            {"        "}target_lang = <span className={styles.str}>"pt"</span>{"\n"}
            {"    "}<span className={styles.kw}>elif</span> recorder.detected_language == <span className={styles.str}>"pt"</span>:{"\n"}
            {"        "}target_lang = <span className={styles.str}>"en"</span>{"\n"}
            {"\n"}
            {"    "}translate = GoogleTranslator(source=<span className={styles.str}>'auto'</span>, target=target_lang).translate(text){"\n"}
            {"\n"}
            {"    "}<span className={styles.kw}>with</span> open(<span className={styles.str}>"app.txt"</span>, <span className={styles.str}>"w"</span>, encoding=<span className={styles.str}>"utf-8"</span>) <span className={styles.kw}>as</span> f:{"\n"}
            {"        "}f.write(translate){"\n"}
            {"    "}print({"{"}translate{"}"}){"\n"}
            {"\n"}
            <span className={styles.kw}>if</span> __name__ == <span className={styles.str}>'__main__'</span>:{"\n"}
            {"    "}print(<span className={styles.str}>"Wait until it says 'speak now'"</span>){"\n"}
            {"    "}recorder = AudioToTextRecorder(){"\n"}
            {"\n"}
            {"    "}<span className={styles.kw}>while</span> <span className={styles.kw}>True</span>:{"\n"}
            {"        "}recorder.text(process_text){"\n"}
          </pre>
        </div>
      </GlowBox>
    </Section>
  );
}