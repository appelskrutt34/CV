import style from "./progressBar.module.css";

function ProgressBar({ percentage, color }) {
  return (
    <div className={style.barContainer}>
      <div
        className={[style.bar, color].join(" ")}
        style={{ width: percentage }}
      ></div>
    </div>
  );
}

export default ProgressBar;
