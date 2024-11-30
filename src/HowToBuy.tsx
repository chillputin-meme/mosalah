const HowToBuy = () => {
    return (
        <div id="how-to-buy">
            <div><h1>How to buy?</h1></div>
            <div className="how-to-buy-container">

                <div className="how-to-buy-card">
                    <h3>Download Phantom</h3>
                    <p>
                        <a href='https://phantom.app/download' target="_blank">Download</a> the Phantom wallet from the App Store or as a Chrome extension to get started.
                    </p>
                </div>
                <div className="how-to-buy-card">
                    <h3>Purchase Solana</h3>
                    <p>
                        Buy <a href='https://solana.com/' target='_blank'>Solana</a> on any centralized exchange or directly on the Phantom wallet.
                    </p>
                </div>
                <div className="how-to-buy-card">
                    <h3>Swap for $MOSALAH</h3>
                    <p>CA: [ EuKTKPFrZ8NQ9kjLvHDJqZfravnEQzwkE4m1wTEKpump ]</p>
                    <p>
                        Visit <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">pump.fun</a>, copy+paste the contract address (CA), or follow the link to swap your SOL for $MOSALAH.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;
