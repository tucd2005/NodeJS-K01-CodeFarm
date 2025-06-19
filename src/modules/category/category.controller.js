import createError from "../../common/utils/error.js";
import handleAsync from "../../common/utils/handleAsync.js";
import Category from "./category.model.js";
import createResponse from "../../common/utils/response.js";



export const createCategory = handleAsync(async(req,res,next)=> {
    const existing = await Category.findOne({title:req.body.title});
    if(existing) return next(createError(400, "This category already exists!"))
        const data = await Category.create(req.body);
    return res.json(createResponse(true,201,"create Category successfully!", data))
})

export const getListCategory = handleAsync(async(req,res,next)=> {
    const data = await Category.find();
    return res.json(createResponse(true,200,"Get list category succesfully", data))
})

export const getDetailCategory = handleAsync(async(req,res,next)=> {
    const data = await findByIdCategory(req.params.id);
    if(!data){
        next(createError(404, "Category not found"))
    }
    return res.json(createResponse(true, 200, "Get detail category succesfully!", data))
})

export const updateCategory = handleAsync(async(req,res,next)=> {
    const {id} = req.params;
    if(id){
        const data = await Category.findByIdAndUpdate(id,req.body);
        return res.json(createResponse(true,200,"Update category successfully!", data))
    }
    next(createError(false,404, "Category delete failed!"))
})

export const deleteCategory = handleAsync(async(req,res,next)=> {
    const {id} = req.params;
    if(id){
        await Category.findByIdAndDelete(id);
        return res.json(createResponse(true,200,"Delete successfully!"))
    }
    next(createError(false,404,"Category delete failed!"))
})

export const softDeleteCategory = handleAsync(async(req,res,next) => {
    const {id} = req.params;
    if(id) {
        await Category,findByIdAndUpdate(id, {
            deleteAt: new Date(),
        });
        return res.json(createResponse(true,200,"Hidden category successfully!"));
    }
    next(createError(false, 404, "Hidden category failed!"))
})

export const restoreCategory = handleAsync(async(req,res,next)=> {
    const {id} = req.params;
    if(id){
        await Category.findByIdAndUpdate(id,{
            deleteAt: null,
        }); 
        return res.json(createResponse(true,200,"Restore category successfully!"));
    }
    next(createError(false, 404, "Restore category failed!"));
})