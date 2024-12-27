# React Native useEffect Cleanup Function Error

This repository demonstrates a common, yet often tricky to debug, error in React Native applications: errors thrown within the cleanup function of the `useEffect` hook.  The error arises when the cleanup function attempts to access or manipulate variables or resources that are no longer valid because the component has unmounted.

## Problem

The provided `useEffectCleanupBug.js` file showcases the problematic code.  Specifically, an error is thrown in the cleanup function because the `subscription` might already be `undefined` if the component unmounts before the cleanup function executes.

## Solution

The solution, demonstrated in `useEffectCleanupSolution.js`, addresses this by adding a check to ensure the subscription exists before attempting to unsubscribe. This prevents the error from being thrown.