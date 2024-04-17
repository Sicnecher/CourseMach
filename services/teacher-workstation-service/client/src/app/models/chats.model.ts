export interface ChatsList{
    contactId: string,
    context: ChatContext[]
}

interface ChatContext {
    time: Date,
    from_you: boolean,
    context: string
}