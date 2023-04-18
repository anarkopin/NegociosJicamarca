import { connect } from "react-redux";
import Layout from "../../hocs/layouts/Layout";

function Dashboard() {
    return (
        <Layout>
            <h1>Dashboard</h1>
     
        </Layout>
    );
}

const mapStateToProps=state =>({

})

export default connect(mapStateToProps,{
    
})(Dashboard)