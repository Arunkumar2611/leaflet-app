import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../action/actionVolcano";

function RandomData(props) {

    useEffect(() => {
      const { dispatch } = props;
      dispatch(fetchData());
    }, []);
  
    const { loading, items, error } = props;
    console.log(items);
 
    if (loading) return <span>loading...</span>;
    if (error) return <span>error!</span>;
  
    return (
      <ul>
        {items.map((item) => (
          <li key={item.properties.VolcanoID}>{item.properties.V_Name}</li>
        ))}
      </ul>
    );
  }
  
  const mapStateToProps = (state) => {
    const { volcano } = state;
    console.log(volcano)
    return {
      loading: volcano.loading,
      items: volcano.data,
      error: volcano.error
    };
  };
  
  export default connect(mapStateToProps)(RandomData);
  