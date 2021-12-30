type PropsType = {
    contact: string | null
    contactValue: string
}
export const Contact = ({contact, contactValue}: PropsType) => {
    return <div style={{paddingLeft: '15px'}}>
        <b>{contact}</b>: {contactValue}
    </div>
}