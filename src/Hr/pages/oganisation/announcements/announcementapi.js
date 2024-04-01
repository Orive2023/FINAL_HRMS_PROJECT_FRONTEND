import axios from 'axios';

const url = "https://api.orivehrms.com";

export const saveAnnouncements = async (formData) => {
    try {
        await axios.post(
            `${url}/announcement/create/announcement`,
            formData
        );
    } catch (error) {
        console.error("saveAnnouncements", error);
    }
};

export const loadAnnouncements = async () => {
    try {
        const result = await axios.get(
            `${url}/announcement/get/announcement`,
            {
                validateStatus: () => {
                    return true;
                },
            }
        );
        return result.data;
    } catch (error) {
        console.error("Error load announcement", error);
    }
};

export const fetchCompanies = async () => {
    try {
        const response = await axios.get(
            `${url}/company/get/company`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching company data", error);
        return [];
    }
};

export const fetchLocations = async () => {
    try {
        const response = await axios.get(
            `${url}/location/get/location`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching location data", error);
    }
};

export const fetchDepartment = async () => {
    try {
        const response = await axios.get(
            `${url}/department/get/department`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching department data", error);
    }
};

export const deleteAnnouncement = async (id) => {
    try {
        await axios.delete(`${url}/announcement/delete/${id}`);
    } catch (error) {
        console.error("Error deleting announcement", error);
    }
};
