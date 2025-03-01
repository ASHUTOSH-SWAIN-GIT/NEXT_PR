"use client"

import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import React, { useActionState, useState } from 'react'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'
import { Send } from 'lucide-react'
import { formSchema } from '@/lib/validation'
import {z} from "zod"

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [pitch, setPitch] = useState("")
    const handleFormSubmit = async (prevState: any,formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("url") as string,
                pitch,
            }

            await formSchema.parseAsync(formValues)

            console.log(formValues);
            
        } catch (error) {
            if (error instance of z.)
        }
    }
    const [state,formction,isPending] = useActionState(handleFormSubmit,{
        error:"",
        status:"INITIAL"
    })
    
    return (
        <form action={formction} className='startup-form'>
            <div>
                <label htmlFor='title' className='startup-form_label'>Title</label>
                <Input
                    id="title"
                    name="title"
                    className="startup-form_input"
                    required
                    placeholder="Startup Title"
                />
                {errors.title && <p className='startup-form-error'>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor='Description' className='startup-form_label'>Description</label>
                <Textarea
                    id="Description"
                    name="Description"
                    className="startup-form_textarea"
                    required
                    placeholder="Startup Description"
                />
                {errors.description && <p className='startup-form-error'>{errors.description}</p>}
            </div>
            <div>
                <label htmlFor='category' className='startup-form_label'>Category</label>
                <Input
                    id="category"
                    name="category"
                    className="startup-form_input"
                    required
                    placeholder="Startup category (Tech,health,education...)"
                />
                {errors.category && <p className='startup-form-error'>{errors.category}</p>}
            </div>
            <div>
                <label htmlFor='link' className='startup-form_label'>Image URL</label>
                <Input
                    id="link"
                    name="link"
                    className="startup-form_input"
                    required
                    placeholder="Startup image url"
                />
                {errors.link && <p className='startup-form-error'>{errors.link}</p>}
            </div>
            <div data-color-mode="light">
                <label htmlFor='pitch' className='startup-form_label'>Pitch</label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id='pitch'
                    preview='edit'
                    height={300}
                    style={{borderRadius: 20,overflow: 'hidden'}}
                    textareaProps={{
                        placeholder: "Breifly describe your idea and what problem it solves "
                    }}
                    previewOptions={{
                        disallowedElements:[`style`]
                    }}
                />
                {errors.pitch && <p className='startup-form-error'>{errors.pitch}</p>}
            </div>
            <Button
                type='submit'
                className='startup-form_btn text-white'
                disabled={isPending}
            >
                {isPending ? "Submiting..." : "Submit your pitch"}
                <Send className='size-6 ml-2'/>
            </Button>
        </form>
    )
}

export default StartupForm
