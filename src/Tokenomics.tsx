const Tokenomics = () => {
    return (
        <div id="tokenomics" className='tokenomics-wrapper'>
            {/* <img src='src/assets/heading-image-new.png'/> */}
            <h1>Tokenomics</h1>
            <div className="tokenomics-container">
                <div className="tokenomics-card">
                    <h3>Contract Safeguard</h3>
                    <p>The contract is revoked, ensuring no further modifications can occur, enhancing trust and security.</p>
                </div>
                <div className="tokenomics-card">
                    <h3>Zero Tax</h3>
                    <p>Both buy and sell taxes are set to 0%, making it more appealing for traders and investors.</p>
                </div>
                <div className="tokenomics-card">
                    <h3>Liquidity Burnt</h3>
                    <p>100% of liquidity is burnt, guaranteeing long-term price stability and no rug-pull risks.</p>
                </div>
                <div className="tokenomics-card">
                    <h3>Total Supply</h3>
                    <p>A fixed supply of 1,000,000,000 tokens ensures scarcity and predictability for long-term investors.</p>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
