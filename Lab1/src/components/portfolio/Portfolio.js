import OutlinedCard from "../../reusableComponents/card/Cards";

const renderContent = (cardTitle) => {
  return (
    <div className="card-body">
      <h5 className="card-title">{cardTitle}</h5>
    </div>
  );
};

const Portfolio = () => {
  const cardData = [
    { cardTitle: 'Web Design' },
    { cardTitle: 'Mobile Design' },
    { cardTitle: 'Logo Design' },
    { cardTitle: 'Web Application Development' },
    { cardTitle: 'Mobile Application Development' },
    { cardTitle: 'PWA Development' }
  ];

  return (
    <>
      <div className="text-center pt-5">
        <h2 className="display-4 pt-5">Portfolio</h2>
      </div>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <OutlinedCard renderContent={renderContent} cardTitle={card.cardTitle} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
