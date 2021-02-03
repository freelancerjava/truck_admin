import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUsers } from '../users/query';

const { Option } = AutoComplete;

const SearchBar = () => {
    const [query, setquery] = useState('');
    const [users, setusers] = useState([]);
    const usersdata = useQuery(['users'], getUsers)
    useEffect(() => {
        if (usersdata.data) {
            setusers(usersdata.data.filter(item => {
                return item.phone && item.phone.toUpperCase().indexOf(query.toUpperCase()) != -1
                    || item.email && item.email.toUpperCase().indexOf(query.toUpperCase()) != -1
                    || item.first_name && item.first_name.toUpperCase().indexOf(query.toUpperCase()) != -1
                    || item.id && item.id == parseInt(query)
            }))
        } else {
            setusers([])
        }
    }, [usersdata.data, query])
    const handleSearch = (value) => {
        setquery(value)
    };
    return (
        <AutoComplete style={{ width: 200 }} onSearch={handleSearch} placeholder="Поиск"
        // filterOption={(inputValue, option) =>
        //     option.value && option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        // }
        >
            {users.map(({ email, first_name, second_name, id, query, phone }) => (
                <Option key={id} value={email || phone || first_name} >
                    <Link to={`/admin/users/view/${id}`}>{id} : {phone} - {first_name} -  {email}</Link>
                </Option>
            ))}
        </AutoComplete>
    );
};

export default SearchBar

// {
        //     filter: JSON.stringify(
        //         {
        //             where:
        //             {
        //                 or:
        //                     [
        //                         // {
        //                         //     and: [
        //                         //         { email_like: query },
        //                         //         { email_nlike: '' }
        //                         //     ]
        //                         // },
        //                         {
        //                             and: [
        //                                 { phone_like: query },
        //                                 { phone_nlike: '' }
        //                             ]
        //                         }
        //                     ]
        //             }
        //         }
        //     )
        // }