import slugify from 'slugify';
import noteModel from '../models/NoteModel.js';

export const createNoteController = async (req, res) => {
    // console.log(req);
    console.log(req.body);
    try {
        const {title, description} = req.body
        if (!title) {
            res.status(500).send({error: "Name is required"});
        }
        if (!description) {
            res.status(500).send({error: "Description is required"});
        }
        const note = new noteModel({title, description});
        await note.save();
        res.status(200).send({
            success: true,
            message: "note created successfully",
            note
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in creating note",
            error
        })
    }
}

export const getNotesController = async (req, res) => {
    try {
        const notes = await noteModel.find({});
        res.status(200).send({
            success: true,
            message: "Sucessfully got all notes",
            notes,
            total_count: notes.length
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting notes",
            error
        })
    }
}

export const updateNoteController = async (req, res) => {
    try {
        const { title, description } = req.body;
        //alidation
        if (!title) {
            res.status(500).send({error: "Name is required"});
        }
        if (!description) {
            res.status(500).send({error: "Description is required"});
        }

        const notes = await noteModel.findByIdAndUpdate(req.params.nid, { ...req.body }, { new: true });
        
        notes.save();

        res.status(201).send({
            success: true,
            message: "Note Updated Successfully",
            notes,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Update note",
        });
    }
};

export const deleteNoteController = async (req, res) => {
    try {
        await noteModel.findByIdAndDelete(req.params.nid);
        res.status(200).send({
            success: true,
            message:"Deleted note successfully",
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:"Error while deleting note",
            error
        })
    }
};

