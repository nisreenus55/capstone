import React from "react";
import { Link } from "react-router-dom";

const RenderRows = ({ time, index, handleClick }) => {
    return (
        <React.Fragment>
            <tr className="table-tr">
                <td
                    style={{
                        fontSize: "15px",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                    }}
                >
                {time}{" "}
                </td>
                <td>
                    <button
                        className="table-btn"
                        aria-label="Reserve Table Button"
                        data-testid="reservButton"
                    >
                        <Link
                            to="/reservation"
                            className="reserve-link"
                            data-testid="reservLink"
                            onClick={() => handleClick(time)}
                        >
                        Reserve
                        </Link>
                    </button>
                </td>
            </tr>
        </React.Fragment>
    );
};

export default RenderRows;
