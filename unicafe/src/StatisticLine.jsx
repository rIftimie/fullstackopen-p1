import React from "react";

function StatisticLine({ type, value }) {
    return (
        <section>
            {type}: {value}
        </section>
    );
}

export default StatisticLine;
