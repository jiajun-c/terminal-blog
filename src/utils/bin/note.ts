import ReactMarkdown from 'react-markdown'

const input = `# This is a header\n\nAnd this is a paragraph`

export const note = async(args?: string[]): Promise<string> => {
    return `
    <ReactMarkdown children={${input}} />
    `;
};