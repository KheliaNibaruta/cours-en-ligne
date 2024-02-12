/* eslint-disable react/jsx-no-undef */
"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Course } from "@prisma/client";
import Image from "next/image";
import FileUpload from "@/components/file-upload";

interface AttachmentFormProps {
    initialData: Course & { attachments: Attachment[] };
    courseId: string;
}

const formSchema = z.object({
    url: z.string().min(1),
});

const AttachmentForm = ({
    initialData,
    courseId
  
}: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values);
            toast.success("Cours modifé avec succès");
            toggleEdit();    
            router.refresh();

        } catch (error) {
            toast.error("Quelque chose s'est mal passé");
        }
    }

    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Ressources du cours
                <Button 
                    onClick={toggleEdit}
                    variant="ghost"
                >
                    {isEditing && (
                        <>Annuler</>
                    )}

                    {!isEditing && (
                        <>
                            <PlusCircle  className="h-4 w-4 mr-2"/>
                             Ajouter un fichier
                        </>
                    )}

                </Button>
            </div>
            {!isEditing && (
                <>
                    {initialData.attachments.length === 0 && (
                        <p className="text-sm mt-2 text-slate-500 italic">
                            Pas encore de fichier joint ici
                        </p>
                    )}
                    
                </>
             )
            }
            {isEditing && (
                <div>
                    <FileUpload 
                        endpoint="courseImage"
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ imageUrl: url });
                            }
                        }}
                    />
                    <div className="text-xs text-muted-forground mt-4">
                        16:9 aspect ratio recommended
                    </div>
                </div>
            )}
        </div>
      )
    }

export default AttachmentForm