import HardwaresTable from "./tc/HardwaresTable";
import TeamsTable from "./tc/TeamsTable";
import UsersTable from "./tc/UsersTable";

const App = () => {

    return (
        <div className="table_container">
            <HardwaresTable/>
            <br/>
            <br/>
            <TeamsTable/>
            <br/>
            <br/>
            <UsersTable/>
        </div>
    );
};

export default App;
