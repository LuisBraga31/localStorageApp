/* eslint-disable react/prop-types */
import '../../styles/components/table.sass';

export default function Table({userList, setUserList}) {

    const removeAll = () => {
        localStorage.removeItem('users');
        setUserList([]);
    }

    const removerUser = (index) => {
        
        const listaAtualizada = [... userList];
        listaAtualizada.splice(index, 1);

        setUserList(listaAtualizada);
        localStorage.setItem('users', JSON.stringify(listaAtualizada));
    
    };

    return (

        <div className="table">
            
            <table>
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Sobrenome </th>
                        <th> Idade </th>
                        <th> Email </th>
                        <th> Ações </th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((user, index) => (
                    <tr key={index}>
                        <td>{user.nome}</td>
                        <td>{user.sobrenome}</td>
                        <td>{user.idade}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="rmv" onClick={() => removerUser(index)}> X </button> 
                        </td>
                    </tr>
                    ))}

                </tbody>

                
            </table>

            <div className="buttonRemove">
                <button onClick={removeAll}> Limpar </button>
            </div>

        </div>

    )
}