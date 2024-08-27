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
    try {
        const res = await axios.post(`${END_POINT}/api/address-lookup`, form)
        return res.data
    } catch (error) {
        console.log(error)
    }
}