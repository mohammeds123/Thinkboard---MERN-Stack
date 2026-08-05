import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import axiosInstance from '../lib/axios'
import { toast } from 'react-hot-toast'
import { LoaderIcon } from 'lucide-react'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try{
        const res= await axiosInstance.get(`/notes/${id}`)
        setNote(res.data)
      } catch(error){
        toast.error('Failed to load note')
        console.error('Error fetching note:', error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchNote()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    )
  }    

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        
      </div>
    </div>
  )
}

export default NoteDetailPage