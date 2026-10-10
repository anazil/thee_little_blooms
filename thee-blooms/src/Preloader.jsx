import './Preloader.css'

const arabicText = 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-bg" />
      <div className="preloader-content">
        <p className="arabic-text" dir="rtl">
          {arabicText.split(' ').map((word, i) => (
            <span key={i}>
              <span
                className="arabic-word"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {word}
              </span>
              {i < arabicText.split(' ').length - 1 && ' '}
            </span>
          ))}
        </p>
        <p className="subtitle">
          We are getting married
        </p>
      </div>
    </div>
  )
}
