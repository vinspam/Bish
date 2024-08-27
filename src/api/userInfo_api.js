import axios from "axios";
import { END_POINT } from '../config'

export async function create(form) {
    try {
        const res = await axios.post(`${END_POINT}/api/users`, form)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function bishCode() {
    try {
        const res = await axios.get(`${END_POINT}/api/users/uniqeCode`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function sendsms(param) {
    try {
        const res = await axios.post(`${END_POINT}/api/users/sms/send`, { id: param })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function sendextra(param) {
    try {
        const res = await axios.post(`${END_POINT}/api/users/sms/extra`, { id: param })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function sendEmail(param) {
    try {
        const res = await axios.post(`${END_POINT}/api/users/email`, param)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function read(id) {
    try {
        let response = await fetch(`${END_POINT}/api/users/` + id)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export async function userList() {
    try {
        let response = await fetch(`${END_POINT}/api/users/`, {
            method: 'GET',
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }

}

export async function postCode(form) {
    console.log("form:::", form);
    try {
        const res = await fetch(`${END_POINT}/api/address-lookup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });

        // Check if the response is ok (status is in the 200–299 range)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Parse the JSON from the response
        return data;
    } catch (error) {
        console.error('Error fetching address data:', error);
        return null; // Return null or handle it in the way you prefer
    }
}
