import { getTopic } from "../../api";


export const ls = async(): Promise<string[]> => {
    const topics = await getTopic()
    return topics
};