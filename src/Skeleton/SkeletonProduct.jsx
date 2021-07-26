import React from 'react'
import { Skeleton } from './Skeleton'

export const SkeletonProduct = ({product}) => {
    return (
        <div className="skeleton-wrapper row">
            <Skeleton type="thumbnail"/>
            <Skeleton type="text-lg"/>
            <Skeleton type="text-md"/>
            <Skeleton type="text-sm" />
            <div className=" col-6">
                <Skeleton type="product-img"/>
            </div>
            <div className=" col-6">
                <Skeleton type="product product-title"/>
                <Skeleton type="product-description"/>
                <Skeleton type="product-price"/>
                <Skeleton type="product-addBtn"/>
            </div>
        </div>
    )
}