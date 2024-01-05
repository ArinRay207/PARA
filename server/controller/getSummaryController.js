import axios from 'axios';

export const getSummaryController = async (req, res) => {
    try {
        const {txt} = req.body
        // console.log(txt);
        if (!txt) {
            res.status(500).send({error: "Name is required"});
        }
        const data = await axios.post('http://3.27.147.187/get-summary', {
          text: txt
        })
        console.log()
        const ans = data.data.result;
        res.status(200).send({
            success: true,
            message: "note created successfully",
            ans
        })
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in creating note",
            error
        })
    }
}