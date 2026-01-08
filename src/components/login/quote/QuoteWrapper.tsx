import quoteIcon from "../../../assets/svg/quoteIcon.svg"
export const QuoteWrapper = () => {
    return (
        <div className="wrapperQuote">
            <div className="containerQuote">
                <img src={quoteIcon} alt="quote-icon" className="quote-icon"/>
                <p className="text-quote">Книги - це кораблі думки, що мандрівні хвилями часу і дбайливо несуть свій дорогоцінний вантаж від покоління до покоління.</p>
                <div>
                <hr className="dash-quote"/>
                <p className="text-author">Бекон Ф.</p>
                </div>
            </div>
        </div>
    )
}