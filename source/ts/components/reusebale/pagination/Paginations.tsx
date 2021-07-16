import * as React from "react";
import Button from "../button/Button";

interface IPaginationProps
{

}


const Pagination: React.FunctionComponent<any> = (props: any) =>
{
    const {totalItems, pages, limit, currentPage,onChange, isEmpty} = props;

    const  pageChange = (e, type) =>
    {
        const value = +e.target.value;

        switch (type)
        {
            case "change":
                 onChange({currentPage: !!pages && !!pages.total ? (value > pages.total ? pages.total : value < 1 ? 1 : value) : 1});
                break;
            case "prev":
                  onChange({currentPage: currentPage + 1});
                break;
            case "next":
                 onChange({currentPage: currentPage + 1});
                break;
        }
    };

    const limitChange = (e) =>
    {
        onChange({itemsPerPage: e.target.value, currentPage: 1});
    };


    return ( <div style={styles.div}>
            <div style={{flex: 1}}>
                <span> Show </span>
                <div className="select-container">
                    <select style={styles.select} onChange={limitChange}>
                        {
                            ["2", "4", "8"].map(item =>
                            {
                                return (
                                    <option key={item} value={item}>{item}</option>
                                );
                            })
                        }
                    </select>
                </div>
                <span> Pagination from "here must be totalItems"</span>
            </div>
            <div>
                {/*<span> Page </span>*/}
                {/*<Input*/}
                {/*    type="number"*/}
                {/*    // min={1}*/}
                {/*    // max={total}*/}
                {/*    value="5"*/}
                {/*    placeholder={""}*/}

                {/*    onChange={(e) => null}*/}
                {/*/>*/}
                {/*<span> of Total </span>*/}
                <Button
                    text="Prev"
                    type="button"
                    disabled = {isEmpty}
                    onClick={(e) => pageChange(e, "prev")} />

                <Button
                    text="Next"
                    type="button"
                    disabled = {isEmpty}
                    onClick={(e) => pageChange(e, "next")} />
            </div>
        </div>
  )
};

const styles = {
    div: {
        position: "absolute" as any,
        display: "flex",
        background: "#fafbfd",
        border: "1px solid #e4e8eb",
        bottom: 0,
        color: "#17293e",
        padding: "8px 10px",
        fontSize: 12,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        whiteSpace: "nowrap" as "nowrap",
        lineHeight: "20px",
        width: "100%",
    },
    select: {
        width: "100%",
        WebkitAppearance: "none" as "none",
        borderColor: "var(--main-border-color)",
        borderRadius: 2,
        height: 22,
        padding: "2px 4px",
        cursor: "pointer",
        fontSize: 12,
        color: "inherit"
    },
    input: {
        margin: "0 6px",
        minWidth: 40,
        width: 40,
        padding: "3px 5px 3px 0",
        textAlign: "center",
        fontSize: 12,
        // $nest: {
        //     "& + span": {
        //         lineHeight: "18px",
        //         display: "inline-block"
        //     }
        // }
    },
    left: {
        verticalAlign: "top",
        marginLeft: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        minWidth: 0,
        padding: "5px 8px"
    },
    right: {
        verticalAlign: "top",
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderLeft: "none",
        minWidth: 0,
        padding: "5px 8px"
    }
};


export default Pagination;