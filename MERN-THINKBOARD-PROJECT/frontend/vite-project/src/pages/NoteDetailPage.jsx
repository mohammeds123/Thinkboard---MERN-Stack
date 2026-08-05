import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try{
        const res = await axiosInstance.get(`/notes/${id}`)
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

  const handleDelete = () => {}

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
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
          <Link to={`/`} className="btn btn-ghost">
            ← Back to Notes
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <Trash2Icon className="h-5 w-5" />
            Delete Note
          </button>
          </div>
          <div className="card bg-base-100">
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage