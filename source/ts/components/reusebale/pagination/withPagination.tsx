import * as React from "react"
import Pagination from "./Paginations";
import {db} from "../../../firebase/Firebase";




export function withPagination(config: any) {

    return class WithPagination extends React.PureComponent<any | any, any>
    {
        constructor(props: any)
        {
            super(props);

            this.state = {
                list: [],
                pages: {},
                listIsReady: false,
                currentPage: 1,
                searchCurrentPage: 1,
                itemsPerPage: "2",
                totalItems: 0,
                isEmpty: false,
            };
        }

        componentDidMount(): void
        {
            console.log("pagination did mount")
            this.getList()
        }




        render(): JSX.Element
        {
            const {Component} = config;
            return (
                <Component
                    {...this.props}
                    {...this.state}
                >
                    <Pagination
                        currentPage={this.state.currentPage}
                        limit={this.state.itemsPerPage}
                        totalItems={this.state.totalItems}
                        isEmpty={this.state.isEmpty}
                        disabled={!this.state.listIsReady}
                        onChange={this.paginationChange}
                    />
                </Component>
            );
        }
s
         private paginationChange = (obj : {currentPage: number}) => {

             this.setState({
                 ...obj
             }, () => {
                 this.getList();
             })
         }

        private async getList () {

            const {currentPage, itemsPerPage, } = this.state
            console.log("getList",  currentPage, currentPage === 1 ? 1 : currentPage*itemsPerPage)
           // const ref =  db.collection("users").orderBy("createdAt").startAfter(3).limit(2);
            const ref =  db.collection("users").orderBy("createdAt").limit(currentPage*itemsPerPage);
            // start after doesnt work
             const list = await ref.get();

            this.setState({list: list.docs, isEmpty: list.empty})

            list.docs.forEach(( item) => console.log("item", item.data()))

            console.log("data",list)

        }
    };

}